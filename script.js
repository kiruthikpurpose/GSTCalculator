function calculateGST(percentage) {
    const amount = document.getElementById('amount').value;
    if (amount === "") {
        alert("Please enter an amount");
        return;
    }
    
    const gst = (amount * percentage) / 100;
    const total = parseFloat(amount) + gst;

    document.getElementById('result').innerText = `GST (${percentage}%): ${gst.toFixed(2)}, Total: ${total.toFixed(2)}`;
}
