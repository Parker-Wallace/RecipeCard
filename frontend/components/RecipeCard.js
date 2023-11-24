document.addEventListener("DOMContentLoaded", 

() => {
    $(".recipecard").html(
    `<div class="container">
    <!-- Recipe Card Component -->
    <div class="recipe-card">
        <img src="https://via.placeholder.com/400x200" class="card-img-top" alt="Recipe Image">
        <div class="recipe-card-body">
            <h5 class="recipe-card-title">Classic Dish</h5>
            <p class="recipe-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" class="recipe-card-button">View Recipe</a>
        </div>
    </div>
    <!-- End Recipe Card Component -->
</div>`)})