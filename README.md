# dropBox

This is a basic code

run comand --- npm start

Code will not work -- it will just upload the file in the local folder.

Basic design which I thought of.
// --- S3 bucket store --- cause it is cheap and open source
Files -- Table Name
fileid - uniqueKey --(personal)
file name - Name 
S3 location - url
timestamp - date
size -- 
file type -- 

API --
Upload - 
http long polling /// SQS  /// 
response return --- ()

Read - download - 

Update - name/ file update -- 

Delete - normal 

List Files - GET  - ALL files.

Uploading a file can be done directly or we can upload in chuncks(this will help in scale and use multiple users at a time). Editing an uploaded file can be tricky but it will be good if we can edit a part of an uploaded file in that way we have to handle the chunk part of the uploaded one.

