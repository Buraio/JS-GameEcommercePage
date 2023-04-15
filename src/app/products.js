class Products {
  async getProducts() {
    try {
      const result = await fetch("./products.json");
      const serializedData = await result.json();

      return serializedData;
    } catch (error) {
      console.log(error);
    }
  }
}

export { Products };
