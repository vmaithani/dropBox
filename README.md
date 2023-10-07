# dropBox

This is a basic code

Basic Setup --
setup local Database -- 

NODE_DB_USER=postgres
NODE_DB_PASS=postgres
NODE_DB= notifcation
NODE_DB_HOST=localhost

create schema - dropBox

create table to store file meta data - 
CREATE TABLE "dropBox".files (
	id bigserial NOT NULL,
	uniqueFileName varchar NOT NULL,
	originalName varchar NULL,
	url varchar NULL,
	datetime timestamp NOT NULL,
	fileSize int4 NULL,
	fileType varchar NULL
)

Start server --- npm start

Open html file - index.html on Browser.

Upload a file -  it will just upload the file in the local folder.
and save the meta data in DB



API --
Upload - 
(after uploading Please refresh the page. to see uploaded files list)

List Files - GET  - ALL files.

Download - add id to download the file

Read - not working 

Update - name/ file update -- 

Delete - normal (not working)

Uploading a file can be done directly or we can upload in chuncks(this will help in scale and use multiple users at a time). Editing an uploaded file can be tricky but it will be good if we can edit a part of an uploaded file in that way we have to handle the chunk part of the uploaded one.

