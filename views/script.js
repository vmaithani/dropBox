// // api url
const api_url = 
	"http://localhost:3000";

// Defining async function
async function getapi(url) {

	// Storing response
	const response = await fetch(url + '/files');

	// Storing data in form of JSON
	var data = await response.json();
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
	let tab = 
		`<tr>
		<th>id</th>
		<th>originalname</th>
		<th>filesize</th>
		<th>filetype</th>
		</tr>`;

	// Loop to access all rows 
	for (let r of data) {
		tab += `<tr> 
	<td>${r.id} </td>
	<td>${r.originalname}</td>
	<td>${r.filesize}</td> 
	<td>${r.filetype}</td>	
    <button id=${r.id} onclick="remove${r.id}">Delete</button>
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("Files").innerHTML = tab;
}

async function remove(id) {
    const response = await fetch(api_url + `/delete/${id}`, {
        method: 'DELETE'
      });

    console.log(response , "response");
    getapi(api_url);
}

document.addEventListener('DOMContentLoaded', () => {

    const uploadForm = document.getElementById('upload-form');
    const downloadButton = document.getElementById('download-button');
    const filenameInput = document.getElementById('filename');
  
    // File upload form submission
    uploadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(uploadForm);
  
      try {
        const response = await fetch(api_url + '/upload', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          alert('File uploaded successfully');
          uploadForm.reset();
        } else {
          alert('File upload failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  
    // File download
    downloadButton.addEventListener('click', async () => {
      const filename = filenameInput.value;
      if (!filename) {
        alert('Please enter a file id');
        return;
      }
  
      try {
        const response = await fetch(api_url +`/download/${filename}`);
        if (response.ok) {
          // Trigger download
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        } else {
          alert('File not found');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  })
