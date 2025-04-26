from django.shortcuts import render

def modal_view(request):
    return render(request, 'index.html')