const modal = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');
const modalPhoto = document.querySelector('#modal-photo');
const modalClose = document.querySelector('#modal-close');


function showModal() {
  modal.style.display = 'block';
  document.body.classList.add('no-scroll');
  modalContent.style.display = 'flex';
  modalPhoto.style.display = 'none';
}


function hideModal() {
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll');
  document.getElementById('modal-photo-title').value = '';
  document.getElementById('modal-photo-category').selectedIndex = 0; 
  document.getElementById('image').value = ''; 
  document.getElementById('iModalImage').style.color = '#c5c6c9'; 
  document.getElementById('label-image').textContent = '+ Ajouter une photo'; 
  

  const imgPreview = document.querySelector('#form-photo-div img');
  if (imgPreview) {
    imgPreview.remove(); 
  }
  

  document.getElementById("label-image").style.display = "block";
  document.getElementById("form-photo-div > p").style.display = "block";
  document.getElementById("image").style.display = "block";
  document.getElementById("iModalImage").style.display = "block";
}

modalContent.addEventListener('click', function(e) {
  e.stopPropagation();
});
modalPhoto.addEventListener('click', function(e) {
  e.stopPropagation();
});

modalClose.addEventListener('click', hideModal);

modal.addEventListener('click', hideModal);

// Ouvrir Modal
const newPhotoBtn = document.querySelector('#new-photo');
const returnBtn = document.querySelector('#modal-return');
const modalPhotoClose = document.querySelector("#modal-photo-close");

newPhotoBtn.addEventListener('click', function() {
  modalContent.style.display = 'none';
  modalPhoto.style.display = 'block';
});

returnBtn.addEventListener('click', function(){
  modalContent.style.display = 'flex';
  modalPhoto.style.display = 'none';
});

modalPhotoClose.addEventListener('click', hideModal);

document.addEventListener('DOMContentLoaded', function() {
  const modalTrigger = document.getElementById('modal-trigger');
  
  modalTrigger.addEventListener('click', showModal);
});

const imagesModalContainer = document.querySelector('.gallery-modal');

// Fonction pour créer un élément de travail pour la galerie
function createModalWorkFigure(work) {
  const figure = document.createElement('figure');
  const figureCaption = document.createElement('figcaption');
  const figureImage = document.createElement('img');
  const deleteIcon = document.createElement('i'); 
  
  figureImage.src = work.imageUrl;
  figureImage.alt = work.title;
  figure.setAttribute('data-id', work.id); 
  deleteIcon.className = "fa-regular fa-trash-can"; 

  figure.appendChild(figureImage);
  figure.appendChild(figureCaption);
  figure.appendChild(deleteIcon);

  deleteIcon.addEventListener('click', (event) => {
    event.preventDefault();
    deleteWorkById(work.id);
  });

  return figure;
}

fetch('http://localhost:5678/api/works')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((work) => {
      const figure = createModalWorkFigure(work);
      imagesModalContainer.appendChild(figure);
    });
  });

const titleInput = document.getElementById('modal-photo-title');
const categorySelect = document.getElementById('modal-photo-category');
const imageInput = document.getElementById('image');
const submitButton = document.getElementById('modal-valider');

// Fonction pour vérifier l'état du formulaire
function checkForm() {
  if (titleInput.value !== '' && categorySelect.value !== '' && imageInput.value !== '') {
    submitButton.style.backgroundColor = '#1D6154';
  } else {
    submitButton.style.backgroundColor = '';
  }
}

titleInput.addEventListener('input', checkForm);
categorySelect.addEventListener('change', checkForm);
imageInput.addEventListener('change', checkForm);

// Ajouter à modal
const btnValider = document.getElementById("modal-valider");
btnValider.addEventListener("click", addNewWork);

function addNewWork(event) {
  event.preventDefault(); 

  const token = sessionStorage.getItem("Token");

  const title = document.getElementById("modal-photo-title").value;
  const category = document.getElementById("modal-photo-category").value;
  const image = document.getElementById("image").files[0];

  if (!title || !category || !image) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }

  if (image.size > 4 * 1024 * 1024) {
    alert("La taille de l'image ne doit pas dépasser 4 Mo.");
    return;
  }

  if (!image.type.startsWith("image/")) {
    alert("Impossible veuillez télécharger une image.");
    return;
  }

  const modal = document.getElementById("modal");
  modal.style.display = "none";

  const formData = new FormData();
  formData.append("title", title);
  formData.append("category", category);
  formData.append("image", image);

  fetch("http://localhost:5678/api/works", {
    method: "POST",
    body: formData,
    headers: {
      "Accept" : 'application/json', 
      "Authorization" : `Bearer ${token}`
    }
  })
  .then(response => response.json()) 
  .then(work => {

    const figure = createWorkFigure(work);
    const gallery = document.querySelector('.gallery');
    gallery.appendChild(figure);

    const figureModal = createModalWorkFigure(work);
    const galleryModal = document.querySelector('.gallery-modal');
    galleryModal.appendChild(figureModal);

    alert('Le nouvel travail a été ajouté avec succès.');
    hideModal();  
  })
  .catch(error => console.error(error));
}

function deleteWorkById(workId) {
    const token = sessionStorage.getItem("Token");
    const confirmation = confirm("Êtes-vous sûr de vouloir supprimer ce travail ?");
    if (confirmation) {
      fetch(`http://localhost:5678/api/works/${workId}`, {
        method: 'DELETE',
        headers: {
          "Accept" : 'application/json',
          "Authorization" : `Bearer ${token}`
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('La suppression du travail a échoué.');
        }
        const modalWorkToRemove = document.querySelector(`figure[data-id="${workId}"]`);
        if (modalWorkToRemove) {
          modalWorkToRemove.remove();
        }

        const galleryWorkToRemove = document.querySelector(`figure[data-id="${workId}"]`);
        if (galleryWorkToRemove) {
          galleryWorkToRemove.remove();
        } else {
          console.error('Élément à supprimer non trouvé dans la galerie principale');
        }
      })
      .catch(error => console.error(error));
    }    
}

const inputImage = document.getElementById("image");
const labelImage = document.getElementById("label-image");
const pImage = document.querySelector("#form-photo-div > p");
const iconeImage = document.querySelector("#iModalImage");

inputImage.addEventListener("change", function () {
  const selectedImage = inputImage.files[0];

  const imgPreview = document.createElement("img");
  imgPreview.src = URL.createObjectURL(selectedImage);
  imgPreview.style.maxHeight = "100%";
  imgPreview.style.width = "auto";

  labelImage.style.display = "none";
  pImage.style.display = "none";
  inputImage.style.display = "none";
  iconeImage.style.display = "none";
  document.getElementById("form-photo-div").appendChild(imgPreview);
});

document.getElementById('modal-photo-close').addEventListener('click', hideModal);
