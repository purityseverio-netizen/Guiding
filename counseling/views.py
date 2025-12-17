from django.shortcuts import render, redirect
from counseling.models import Contact
# Create your views here.
def home(request):
    return render(request, 'index.html')
def about(request):
    return render(request, 'about.html')
def contact(request):
    if request.method == 'POST':
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")
        query = Contact(name=name, email=email, message=message)
        query.save()
        return redirect('/')

    return render(request, 'contact.html')
def services(request):
    return render(request, 'services.html')
