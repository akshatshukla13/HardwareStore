import os
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from django.core.asgi import get_asgi_application
from django.urls import path
from django.core.wsgi import get_wsgi_application
from fastapi import FastAPI
from dotenv import load_dotenv
from datastax.astra import AstraDB

# Load environment variables
load_dotenv()

# Django settings
settings.configure(
    DEBUG=True,
    ALLOWED_HOSTS=['*'],
    ROOT_URLCONF=__name__,
    SECRET_KEY=os.getenv('SECRET_KEY', 'your-secret-key'),
    MIDDLEWARE=[
        'django.middleware.common.CommonMiddleware',
    ],
)

# Initialize Astra DB client
astra_db = AstraDB(
    os.getenv('ASTRA_DB_APPLICATION_TOKEN'),
    os.getenv('ASTRA_DB_ENDPOINT')
)

db = astra_db.database()

# Fetch all products
def get_products(request):
    try:
        collection = db.collection('pvc')
        cursor = collection.find({}, limit=100, include_similarity=True)
        results = [doc async for doc in cursor]
        return JsonResponse(results, safe=False)
    except Exception as e:
        return JsonResponse({'error': f'An error occurred: {str(e)}'}, status=500)

# Fetch top 20 similar products based on input query
@csrf_exempt
def search_products(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=405)

    try:
        body = json.loads(request.body)
        query = body.get('query')
        if not query:
            return JsonResponse({'error': 'Query parameter is required'}, status=400)

        collection = db.collection('pvc')
        cursor = collection.find(
            {},
            sort={'$vectorize': query},
            limit=20,
            include_similarity=True
        )
        results = [doc async for doc in cursor]
        return JsonResponse(results, safe=False)
    except Exception as e:
        return JsonResponse({'error': f'An error occurred: {str(e)}'}, status=500)

# Django URLs
urlpatterns = [
    path('api/products', get_products),
    path('api/search', search_products),
]

# WSGI and ASGI applications
application = get_wsgi_application()
asgi_application = get_asgi_application()

if __name__ == '__main__':
    from django.core.management import execute_from_command_line
    execute_from_command_line(['manage.py', 'runserver', '0.0.0.0:3000'])
