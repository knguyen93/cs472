function handleAddProduct() {
    let form = document.getElementById("productForm");
    let productNumber = form.elements['productNumber'].value;
    let productName = form.elements['productName'].value;
    let quantity = form.elements['quantity'].value;
    let unitPrice = form.elements['unitPrice'].value;
    let supplier = form.elements['supplier'].value;
    let date = form.elements['date'].value;

    let data = "Form Data: \nProduct Number: " + productNumber 
        +"\nProduct Name: " + productName 
        + "\nQuantity: " + quantity 
        + "\nUnit Price: " + unitPrice 
        + "\nSupplier: " + supplier 
        + "\nDate: " + date;
        
    alert(data)
}