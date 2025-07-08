document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input-wrapper input[type="text"]');
    const button = document.querySelector('.input-wrapper input[type="button"]');
    const list = document.querySelector('.buying-list');
    const warningBox = document.querySelector('.warning-box');

    // Esconde o alerta no começo
    warningBox.style.display = 'none';

    button.addEventListener('click', () => {
        const itemText = input.value.trim();

        if (itemText === '') return;

        // Criar estrutura do item
        const itemWrapper = document.createElement('div');
        itemWrapper.className = 'inner-wrapper flex gap-.75 item-center';

        itemWrapper.innerHTML = `
            <div class="flex item-center">
                <input type="checkbox">
            </div>
            <div class="label-wrapper flex item-center">
                <label>${itemText}</label>
            </div>
            <div class="bin-wrapper flex item-center">
                <a href="#" class="remove-btn">
                    <img src="assets/bin.svg" alt="imagem de lixeira">
                </a>
            </div>
        `;

        // Adiciona item na lista
        list.appendChild(itemWrapper);

        // Limpa o input
        input.value = '';

        // Adiciona evento de remoção
        const removeBtn = itemWrapper.querySelector('.remove-btn');
        removeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            itemWrapper.remove();
            showWarning();
        });
    });

    function showWarning() {
        warningBox.style.display = 'flex';

        // Esconde depois de 3 segundos
        setTimeout(() => {
            warningBox.style.display = 'none';
        }, 3000);
    }

    // Botão de "X" do alerta
    const deleteAlertBtn = document.querySelector('.warning-box .delete a');
    deleteAlertBtn.addEventListener('click', (e) => {
        e.preventDefault();
        warningBox.style.display = 'none';
    });
});
