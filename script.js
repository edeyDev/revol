document.addEventListener('DOMContentLoaded', function () {
        fetch('datos.csv')
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n');
                const ul = document.getElementById('csv-content');

                lines.forEach(line => {
                    const values = line.split(';');

                    const li = document.createElement('li');
                    li.innerHTML = `
                        <div class="card">
                        <div class="centrado">
                        <p><b>${values[1]}</b></p>
                            <br/>
                            <p>${values[2]} <b>Miembros</b> </p>
                            <br/>
                            <p><a href="https://www.facebook.com/groups/${values[0]}">TOCAR AQUI</a></p>
                        </div>
                        </div>
                    `;
                    ul.appendChild(li);
                });
            })
            .catch(error => console.error('Error al cargar el archivo CSV', error));
});
