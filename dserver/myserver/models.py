from django.db import models

# project data
class Project(models.Model):
    title = models.CharField(max_length=255)
    link = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    postedOn = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
# chat data
class ChatData(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    chat_mess_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class MessageList(models.Model):
    chat_data = models.ForeignKey(ChatData, on_delete=models.CASCADE)
    side = models.CharField(max_length=255)
    message = models.TextField()
    messaged_on = models.DateTimeField(auto_now_add=True)


# contactForm data
class ContactFormData(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    message = models.CharField(max_length=255)
    messagedOn = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name