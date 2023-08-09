from email.message import EmailMessage
import ssl
import smtplib
sender = "chatbotai30@gmail.com"
password = "eaozaidiuwumbirh"
receiver = "bluekid2457@gmail.com"
subject = "Sample subj"
body = """
Sample body here
"""

em = EmailMessage()
em['From'] = sender
em['To'] = receiver
em['Subject'] = subject
em.set_content(body)

context1 = ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com',465,context=context1) as smtp1:
    smtp1.login(sender,password)
    smtp1.sendmail(sender,receiver,em.as_string())
