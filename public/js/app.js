document.addEventListener("click", (e) => {
    if (e.target.dataset.short) {
      const url = `https://express-mongodb-um32.onrender.com/${e.target.dataset.short}`;
  
      navigator.clipboard
        .writeText(url)
        .then(() => {
          console.log("Texto copiado al portapapeles...");
        })
        .catch((err) => {
          console.log("Algo salió mal", err);
        });
    }
  });