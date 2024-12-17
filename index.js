document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("offerForm");
    const totalPriceEl = document.getElementById("totalPrice");
  
    // Function to generate dropdowns dynamically
    function generateDropdowns(containerId, units) {
      const container = document.getElementById(containerId);
      container.innerHTML = ""; // Clear previous dropdowns
      for (let i = 1; i <= units; i++) {
        const row = `
        <div class="option-row">
          <div class="dropdown">
            <label for="size${i}">Size</label>
            <label for="size${i}"style="display: flex;">#${i}</label>
            <select id="size${i}">
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
          </div>
        
          <div class="dropdown">
            <label for="color${i}">Color</label>
            <select id="color${i}">
              <option>Black</option>
              <option>Red</option>
              <option>Blue</option>
            </select>
            </div>
          </div>`;
        container.insertAdjacentHTML("beforeend", row);
      }
      
      container.style.display = "block";
    }
  
    // Function to update selection and dropdowns
    function updateSelection() {
      const selectedOption = form.querySelector("input[name='offer']:checked");
      const price = selectedOption.value;
      totalPriceEl.textContent = `$${parseFloat(price).toFixed(2)} USD`;
  
      // Hide all options initially
      document.querySelectorAll(".options").forEach((opt) => (opt.style.display = "none"));
  
      // Show appropriate dropdowns
      if (selectedOption.id === "unit1") {
        generateDropdowns("options1", 1);
      } else if (selectedOption.id === "unit2") {
        generateDropdowns("options2", 2);
      } else if (selectedOption.id === "unit3") {
        generateDropdowns("options3", 3);
      }
    }
  
    // Add event listener to radio buttons
    form.querySelectorAll("input[name='offer']").forEach((radio) => {
      radio.addEventListener("change", updateSelection);
    });
  
    // Initialize state
    updateSelection();
  
    // Add to Cart action
    document.getElementById("addToCart").addEventListener("click", () => {
      alert("Item added to cart!");
    });
  });
  