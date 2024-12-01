$(document).ready(function () {
  $("#reservation-form").on("submit", function (e) {
    e.preventDefault();

    // Recopilar datos
    const type = $("#reservation-type").val();
    const location = $("#reservation-location").val();
    const people = $("#reservation-people").val();
    const alcoholSelection = {};

    $(".alcohol-input").each(function () {
      const type = $(this).data("type");
      const quantity = parseInt($(this).val()) || 0;
      if (quantity > 0) {
        alcoholSelection[type] = quantity;
      }
    });

    const clientData = {
      name: $("#client-name").val(),
      email: $("#client-email").val(),
      phone: $("#client-phone").val(),
    };

    // Validar datos
    if (Object.keys(alcoholSelection).length === 0) {
      alert("Debes seleccionar al menos una botella.");
      return;
    }

    // Mostrar datos para confirmar
    console.log({
      type,
      location,
      people,
      alcoholSelection,
      clientData,
    });

    alert("Reserva realizada exitosamente. Te contactaremos pronto.");
  });
});
