 function addMovie() {
        const title = document.getElementById('title').value.trim();
        const genre = document.getElementById('genre').value;
        const rating = document.getElementById('rating').value;

        if (!title || !genre || rating === "") {
            alert("Пожалуйста, заполните все поля!");
            return;
        }

        if (rating < 0 || rating > 10) {
            alert("Рейтинг должен быть от 0 до 10");
            return;
        }

        const movieList = document.getElementById('movieList');

        const div = document.createElement('div');
        div.className = 'movie-item';
        div.innerHTML = `<strong>${title}</strong> | ${genre} | ⭐ ${rating}`;

        movieList.appendChild(div);

        // Tozalash
        document.getElementById('title').value = '';
        document.getElementById('genre').value = '';
        document.getElementById('rating').value = '';
    }
     // Oddiy o'chirish funksiyasi (demo)
    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        if (confirm("Rostan ham o'chirmoqchimisiz?")) {
          this.closest('.movie-item').remove();
          
          // Yangi sonni yangilash
          const count = document.querySelectorAll('.movie-item').length;
          document.querySelector('.total strong').textContent = count;
        }
      });
    });