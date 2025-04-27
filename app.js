document.getElementById("symptom-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const date = document.getElementById("date").value;
    const notes = document.getElementById("notes").value;
  
    const checkedSymptoms = Array.from(document.querySelectorAll(".symptoms input[type='checkbox']:checked"))
      .map(cb => cb.value.toLowerCase());
  
    const entry = { name, age, date, symptoms: checkedSymptoms, notes };
    localStorage.setItem(`pcos-entry-${date}`, JSON.stringify(entry));
  
    // PCOS-related symptom check
    const pcosIndicators = ["irregular periods", "acne", "hair fall", "weight gain"];
  
    let pcosCount = 0;
    pcosIndicators.forEach(symptom => {
      if (checkedSymptoms.includes(symptom)) pcosCount++;
    });
  
    // Show friendly alert messages
    if (pcosCount >= 3 || (checkedSymptoms.includes("irregular periods") && checkedSymptoms.includes("hair fall"))) {
      alert(`⚠️ Heads up, ${name}! Your selected symptoms suggest possible signs of PCOS. Please consult a doctor for a proper diagnosis.`);
    } else {
      alert(`✅ Thanks, ${name}! You’ve successfully filled out the symptom tracker.`);
    }
  
    document.getElementById("symptom-form").reset();
  });

  
  