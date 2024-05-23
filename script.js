document.getElementById('reportButton').addEventListener('click', function() {
    document.getElementById('formContainer').classList.toggle('hidden');
});

document.getElementById('alertButton').addEventListener('click', function() {
    const vehicleName = document.getElementById('vehicleName').value;
    const licensePlate = document.getElementById('licensePlate').value;
    const location = document.getElementById('location').value;

    if (vehicleName && licensePlate && location) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 400;
        canvas.height = 200;

        context.fillStyle = '#fff';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#000';
        context.font = '20px Arial';
        context.fillText('Alerta Caminhão Roubado', 50, 40);
        context.font = '16px Arial';
        context.fillText(`Nome do Veículo: ${vehicleName}`, 50, 80);
        context.fillText(`Placa: ${licensePlate}`, 50, 110);
        context.fillText(`Local do Roubo: ${location}`, 50, 140);

        const link = document.createElement('a');
        link.download = 'alerta_caminhao_roubado.jpg';
        link.href = canvas.toDataURL('image/jpeg');
        link.click();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});