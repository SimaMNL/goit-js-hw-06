const categoriesList = document.getElementById("categories");

const totalCategories = categoriesList.querySelectorAll(".item").length;
console.log(`Număr total de categorii: ${totalCategories}`);

categoriesList.querySelectorAll(".item").forEach((item) => {
  const title = item.querySelector("h2").textContent;

  const categoryItems = item.querySelectorAll("li").length;
  console.log(`Categorie: ${title}, Număr de elemente: ${categoryItems}`);
});
