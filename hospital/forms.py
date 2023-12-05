from django import forms
from django.contrib.auth.models import User
from . import models

wardTypes=[
('Normal','Normal'),
('Operation room','Operation room'),
('ICU','ICU'),
]
# for admin signup
class AdminSigupForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'password']
        widgets = {
            'password': forms.PasswordInput()
        }


class PharmacyForm(forms.ModelForm):
    class Meta:
        model = models.Pharmacy
        fields = '__all__'

class WardForm(forms.ModelForm):
    assignedNurseId = forms.IntegerField(initial='', required=False)
    isAssigned=forms.BooleanField(initial=False,required=False)
    assignedType = forms.CharField(initial='', required=False)
    class Meta:
        model =models.Ward
        fields = ['WardId','WardType']


class DoctorAssignWardForm(forms.ModelForm):
    WardId = forms.ModelChoiceField(queryset=models.Ward.objects.all().filter(isAssigned=False),
                                    empty_label="Ward Id and ward Type"
                                    ,to_field_name="WardId")
    class Meta:
        model=models.Ward
        fields=[]

# for student related form
class DoctorUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'password']
        widgets = {
            'password': forms.PasswordInput()
        }


class DoctorForm(forms.ModelForm):
    class Meta:
        model = models.Doctor
        fields = ['address', 'mobile', 'department', 'status']


# for teacher related form
class PatientUserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'password']
        widgets = {
            'password': forms.PasswordInput()
        }


class PatientForm(forms.ModelForm):
    # this is the extrafield for linking patient and their assigend doctor
    # this will show dropdown __str__ method doctor model is shown on html so override it
    # to_field_name this will fetch corresponding value  user_id present in Doctor model and return it
    assignedDoctorId = forms.ModelChoiceField(queryset=models.Doctor.objects.all().filter(status=True),
                                              empty_label="Name and Department", to_field_name="user_id",
                                              required=False)
    wardId = forms.IntegerField(initial='', required=False)

    class Meta:
        model = models.Patient
        fields = ['address', 'mobile', 'status', 'symptoms']


class AppointmentForm(forms.ModelForm):
    doctorId = forms.ModelChoiceField(queryset=models.Doctor.objects.all().filter(status=True),
                                      empty_label="Doctor Name and Department", to_field_name="user_id")
    patientId = forms.ModelChoiceField(queryset=models.Patient.objects.all().filter(status=True),
                                       empty_label="Patient Name and Symptoms", to_field_name="user_id")

    class Meta:
        model = models.Appointment
        fields = ['description', 'status']


class PatientAppointmentForm(forms.ModelForm):
    doctorId = forms.ModelChoiceField(queryset=models.Doctor.objects.all().filter(status=True),
                                      empty_label="Doctor Name and Department", to_field_name="user_id")

    class Meta:
        model = models.Appointment
        fields = ['description', 'status']


# for contact us page
class ContactusForm(forms.Form):
    Name = forms.CharField(max_length=30)
    Email = forms.EmailField()
    Message = forms.CharField(max_length=500, widget=forms.Textarea(attrs={'rows': 3, 'cols': 30}))

# Developed By : sumit kumar
# facebook : fb.com/sumit.luv
# Youtube :youtube.com/lazycoders