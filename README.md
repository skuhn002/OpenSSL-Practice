﻿# OpenSSL-Practice

## Generate a Private Key
- Use this command to generate a 2048-character private key in a file named ```yourdomain.key```: ```openssl genrsa -out yourdomain.key 2048```

## Generate a Certificate Signing Request (based on the Private Key)
- Use this command to generate a certificate Signing Request (CSR) from ```yourdomain.key``` in a file named yourdomain.csr: ```openssl req -new -key yourdomain.key -out yourdomain.csr```

## Generate a Certificate
### Certificate Authority
- Communicate with an accredited Certificate Authority (CA) to ensure that common browsers like Google recognize your HTTPS site as secure
- When communicating with the CA you will need to provide the contents of your CSR file including the ```-----BEGIN CERTIFICATE REQUEST-----``` and ```-----END CERTIFICATE REQUEST-----``` lines
- This does cost quite a bit of money, but this is necessary for anyone hoping to expose their web application to the public
- Not doing this will lead to users not trusting your website
### Self-signing
- When testing/learning to use HTTPS it is helpful to generate a self-signed certificate for practice purposes
- Use this command to generate a self-signed SSL certificate named ```localhost.crt``` which corresponds with the above mentioned private key and CSR files: ```openssl x509 -in localhost1.csr -out localhost1.crt -req -signkey localhost1.key -days 1001``` 


## Reference Key and Cert Application Code
- Once you have your cert and key files, specify them in the options parameter of https.createServer()
