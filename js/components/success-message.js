function submitted(messageType="success", message = "Submitted") {
    return `<div class="alert ${messageType}">${message}</div>`;
}