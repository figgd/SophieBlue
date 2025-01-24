<<<<<<< HEAD
//MODAL//

=======
>>>>>>> 062b23d (update)
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');
const modalPhoto = document.querySelector('#modal-photo');
const modalClose = document.querySelector('#modal-close');

<<<<<<< HEAD
function showModal() {
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
=======

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
>>>>>>> 062b23d (update)
}

modalContent.addEventListener('click', function(e) {
  e.stopPropagation();
});
modalPhoto.addEventListener('click', function(e) {
  e.stopPropagation();
});

modalClose.addEventListener('click', hideModal);

<<<<<<< HEAD

modal.addEventListener('click', hideModal);


//Bouton Photo//

=======
modal.addEventListener('click', hideModal);

// Ouvrir Modal
>>>>>>> 062b23d (update)
const newPhotoBtn = document.querySelector('#new-photo');
const returnBtn = document.querySelector('#modal-return');
const modalPhotoClose = document.querySelector("#modal-photo-close");

<<<<<<< HEAD

=======
>>>>>>> 062b23d (update)
newPhotoBtn.addEventListener('click', function() {
  modalContent.style.display = 'none';
  modalPhoto.style.display = 'block';
});

returnBtn.addEventListener('click', function(){
  modalContent.style.display = 'flex';
  modalPhoto.style.display = 'none';
<<<<<<< HEAD
})

modalPhotoClose.addEventListener('click', hideModal);

document.addEventListener("DOMContentLoaded", () => {

  function showModal() {
    document.getElementById("modal").style.display = "block";
  }


  document.getElementById("modal-close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });


  document.getElementById("modal-photo-close").addEventListener("click", function() {
    document.getElementById("modal-photo").style.display = "none";
  });


  document.getElementById("modal-return").addEventListener("click", function() {
    document.getElementById("modal-photo").style.display = "none";
  });


  document.querySelector("#modal-trigger").addEventListener("click", showModal);
});

const imagesModalContainer = document.querySelector('.gallery-modal')

function createModalWorkFigure(work) {
  const figure = document.createElement('figure')
  const figureCaption = document.createElement('figcaption')
  const figureImage = document.createElement('img')
  const deleteIcon = document.createElement('i') 
        
  figureImage.src = work.imageUrl
  figureImage.alt = work.title
  figure.setAttribute('data-id', work.id); 
  deleteIcon.className = "fa-regular fa-trash-can" 

  figure.appendChild(figureImage)
  figure.appendChild(figureCaption)
  figure.appendChild(deleteIcon)

=======
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
>>>>>>> 062b23d (update)

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

<<<<<<< HEAD
=======
// Fonction pour vérifier l'état du formulaire
>>>>>>> 062b23d (update)
function checkForm() {
  if (titleInput.value !== '' && categorySelect.value !== '' && imageInput.value !== '') {
    submitButton.style.backgroundColor = '#1D6154';
  } else {
    submitButton.style.backgroundColor = '';
<<<<<<< HEAD
    }
  }
=======
  }
}
>>>>>>> 062b23d (update)

titleInput.addEventListener('input', checkForm);
categorySelect.addEventListener('change', checkForm);
imageInput.addEventListener('change', checkForm);

<<<<<<< HEAD
//Ajouter l'image//

=======
// Ajouter à modal
>>>>>>> 062b23d (update)
const btnValider = document.getElementById("modal-valider");
btnValider.addEventListener("click", addNewWork);

function addNewWork(event) {
  event.preventDefault(); 

  const token = sessionStorage.getItem("Token");

  const title = document.getElementById("modal-photo-title").value;
  const category = document.getElementById("modal-photo-category").value;
  const image = document.getElementById("image").files[0];

<<<<<<< HEAD

  if(!title || !category || !image) {
    alert('Veuillez remplir tous les champs du formulaire.')
    return;
  }

  //Check si la taille est correcte//
=======
  if (!title || !category || !image) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }

>>>>>>> 062b23d (update)
  if (image.size > 4 * 1024 * 1024) {
    alert("La taille de l'image ne doit pas dépasser 4 Mo.");
    return;
  }
<<<<<<< HEAD
  
=======

  if (!image.type.startsWith("image/")) {
    alert("Impossible veuillez télécharger une image.");
    return;
  }

  const modal = document.getElementById("modal");
  modal.style.display = "none";

>>>>>>> 062b23d (update)
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
<<<<<<< HEAD
  
=======
>>>>>>> 062b23d (update)

    const figureModal = createModalWorkFigure(work);
    const galleryModal = document.querySelector('.gallery-modal');
    galleryModal.appendChild(figureModal);
<<<<<<< HEAD
  
    alert('Le nouvel travail a été ajouté avec succès.');
  })
  .catch(error => console.error(error));
}
//Supprimer//
=======

    alert('Le nouvel travail a été ajouté avec succès.');
    hideModal();  
  })
  .catch(error => console.error(error));
}
>>>>>>> 062b23d (update)

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
<<<<<<< HEAD
        if (!response.ok){
        throw new error ('La supression du travai à echoué.');
      }
      const modalWorkToRemove = document.querySelector(`figure[data-id="${workId}"]`);
      if (modalWorkToRemove) {
        modalWorkToRemove.remove();
        
      const galleryWorkToRemove = document.querySelector(`figure[data-id="${workId}"]`);
      if (galleryWorkToRemove) {
          galleryWorkToRemove.remove();
      } else {
          console.error('Élément à supprimer non trouvé dans la galerie principale');
        }
      } else {
          console.error('Élément à supprimer non trouvé dans la modale');
      }
    })
    .catch(error => console.error(error));
    }    
  }  
//PREVIEW IMAGE//
=======
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

>>>>>>> 062b23d (update)
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
<<<<<<< HEAD
  iModalImage.style.display = "none";
  document.getElementById("form-photo-div").appendChild(imgPreview);
});
=======
  iconeImage.style.display = "none";
  document.getElementById("form-photo-div").appendChild(imgPreview);
});

document.getElementById('modal-photo-close').addEventListener('click', hideModal);
>>>>>>> 062b23d (update)
