// --- START: Passage Data (from fifth_grade_passages.json) ---
const passageData = {
  "reading_passages": [
    { "id": 1, "passage": "Sarah loves spending time in her grandmother's garden. She helps plant seeds, water flowers, and pick fresh vegetables for dinner every day." },
    { "id": 2, "passage": "The ancient oak tree in our backyard is over one hundred years old. Birds build nests in its branches every spring season." },
    { "id": 3, "passage": "Miguel's favorite subject is science because he enjoys conducting experiments. Today he learned how plants make food using sunlight and water through photosynthesis." },
    { "id": 4, "passage": "The school library is Emma's favorite place to spend lunch breaks. She discovers new worlds through books about adventure, mystery, and friendship." },
    { "id": 5, "passage": "Every morning, Jake walks his golden retriever Max around the neighborhood. They visit the park where Max plays with other friendly dogs." },
    { "id": 6, "passage": "The solar system contains eight planets that orbit around the sun. Mercury is closest while Neptune is the farthest planet from our star." },
    { "id": 7, "passage": "Maria enjoys baking cookies with her mom on Saturday afternoons. They make chocolate chip, oatmeal raisin, and sugar cookies for the family." },
    { "id": 8, "passage": "Dolphins are intelligent marine mammals that live in oceans worldwide. They communicate with each other using clicks, whistles, and body language signals." },
    { "id": 9, "passage": "The recycling program at school teaches students about protecting the environment. We separate paper, plastic, and aluminum cans into different colored bins." },
    { "id": 10, "passage": "Basketball is Alex's favorite sport because it requires teamwork and practice. He shoots hoops every day after school to improve his skills." },
    { "id": 11, "passage": "Butterflies begin life as caterpillars before transforming into beautiful flying insects. This amazing process is called metamorphosis and takes several weeks to complete." },
    { "id": 12, "passage": "The mountain trail was steep and rocky, but the hikers were determined to reach the summit. They packed water, snacks, and warm clothes." },
    { "id": 13, "passage": "Ancient Egypt fascinates students because of the mysterious pyramids and mummies. Pharaohs were buried with treasures to use in the afterlife journey." },
    { "id": 14, "passage": "The art museum displays paintings from famous artists around the world. Students sketch their favorite artwork during field trips to practice drawing." },
    { "id": 15, "passage": "Thunderstorms form when warm, moist air rises quickly into the atmosphere. Lightning occurs when electrical charges build up inside the dark storm clouds." },
    { "id": 16, "passage": "The school orchestra practices every Tuesday after classes end. Students play violins, cellos, flutes, and trumpets to create beautiful music together harmoniously." },
    { "id": 17, "passage": "Penguins are flightless birds that live in Antarctica's freezing temperatures. They huddle together for warmth and slide on ice using their bellies." },
    { "id": 18, "passage": "The invention of the printing press changed how people shared information and stories. Books became more affordable and knowledge spread faster worldwide." },
    { "id": 19, "passage": "Community gardens bring neighbors together to grow fresh fruits and vegetables. Families share tools, seeds, and harvest while children learn about farming." },
    { "id": 20, "passage": "The International Space Station orbits Earth every ninety minutes at seventeen thousand miles per hour. Astronauts conduct experiments in zero gravity conditions." },
    { "id": 21, "passage": "Coral reefs are underwater ecosystems that provide homes for thousands of colorful fish species. They need clean, warm water to survive and grow." },
    { "id": 22, "passage": "The school cafeteria serves healthy meals including fresh salads, whole grain bread, and lean proteins. Students learn about nutrition and balanced diets." },
    { "id": 23, "passage": "Volcanoes form when melted rock called magma rises from deep inside the Earth. Active volcanoes can erupt and create new islands over time." },
    { "id": 24, "passage": "The local fire department visits schools to teach safety rules about fire prevention. They demonstrate how smoke detectors work and escape routes." },
    { "id": 25, "passage": "Honeybees collect nectar from flowers to make sweet honey in their hives. They also help pollinate plants, which helps gardens and farms grow." },
    { "id": 26, "passage": "The city's new playground features swings, slides, and climbing structures made from recycled materials. Children enjoy playing together during recess and weekends." },
    { "id": 27, "passage": "Weather forecasters use special instruments to predict if it will rain, snow, or shine. They study cloud formations and wind patterns daily." },
    { "id": 28, "passage": "The annual science fair showcases student projects about plants, animals, and physics experiments. Judges award prizes for creativity and scientific method usage." },
    { "id": 29, "passage": "Glaciers are massive sheets of ice that move slowly across land over many years. Climate change affects their size and movement patterns." },
    { "id": 30, "passage": "The school newspaper team interviews teachers, writes articles, and takes photographs. They learn journalism skills while sharing campus news with everyone." },
    { "id": 31, "passage": "Rainforests contain more plant and animal species than any other habitat on Earth. They produce oxygen and help regulate our planet's climate." },
    { "id": 32, "passage": "The chess club meets every Thursday to practice strategy games. Students learn patience, critical thinking, and how to plan several moves ahead." },
    { "id": 33, "passage": "Fossils are preserved remains of ancient plants and animals found in rocks. Scientists study them to learn about life millions of years ago." },
    { "id": 34, "passage": "The school's vegetable garden produces tomatoes, carrots, lettuce, and herbs. Students plant seeds, tend crops, and harvest fresh produce for meals." },
    { "id": 35, "passage": "Earthquakes occur when rock layers shift along fault lines deep underground. Scientists use special machines called seismographs to measure their strength and location." },
    { "id": 36, "passage": "The drama club rehearses plays after school every week. Students memorize lines, practice acting, and design costumes for their upcoming spring performance." },
    { "id": 37, "passage": "Migratory birds travel thousands of miles between summer and winter homes. They navigate using stars, landmarks, and Earth's magnetic field as guides." },
    { "id": 38, "passage": "The local zoo educates visitors about wildlife conservation and endangered species protection. Zookeepers care for animals and teach about natural habitats." },
    { "id": 39, "passage": "Desert animals have special adaptations to survive hot, dry conditions with little water. Camels store fat, while lizards hide underground during day." },
    { "id": 40, "passage": "The student council plans school events like dances, fundraisers, and spirit weeks. They represent classmates' ideas and vote on important school decisions." },
    { "id": 41, "passage": "Rivers flow from mountains to oceans, carrying fresh water and nutrients. They provide drinking water, transportation, and homes for fish and wildlife." },
    { "id": 42, "passage": "The robotics team builds and programs machines to complete specific tasks. Students learn engineering, computer coding, and problem-solving skills through hands-on projects." },
    { "id": 43, "passage": "Magnets attract iron and steel objects through invisible magnetic forces. Compass needles point north because Earth acts like a giant magnet with poles." },
    { "id": 44, "passage": "The school band practices marching formations for football games and parades. Musicians play instruments while walking in synchronized patterns across the field." },
    { "id": 45, "passage": "Native American tribes lived in different regions across North America before European settlers arrived. They developed unique cultures, languages, and survival skills." },
    { "id": 46, "passage": "The annual book fair brings hundreds of new titles to school for students to purchase. Teachers recommend age-appropriate stories, mysteries, and adventure books." },
    { "id": 47, "passage": "Tidal pools form when ocean water gets trapped in rocky areas during low tide. Sea stars, crabs, and anemones live in these temporary pools." },
    { "id": 48, "passage": "The school's peer mediation program trains students to help resolve conflicts peacefully. They learn communication skills and fair problem-solving techniques for disputes." },
    { "id": 49, "passage": "Renewable energy sources like solar panels and wind turbines create electricity without pollution. They help protect the environment for future generations worldwide." },
    { "id": 50, "passage": "The annual field day includes relay races, tug-of-war, and obstacle courses for all grade levels. Students demonstrate teamwork, sportsmanship, and physical fitness." }
  ]
};
// --- END: Passage Data ---

// --- Global Variables & DOM Elements ---
const synth = window.speechSynthesis;
const textInput = document.getElementById("textInput");
const textCanvas = document.getElementById("textCanvas");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const speedControl = document.getElementById("speedControl");
const speedDisplay = document.getElementById("speedDisplay");
const pauseControl = document.getElementById("pauseControl");
const pauseDisplay = document.getElementById("pauseDisplay");
const passageSelector = document.getElementById("passageSelector");

// UI Elements
const controlsStep = document.getElementById("controlsStep");
const speedStep = document.getElementById("speedStep");
const progressSection = document.getElementById("progressSection");
const progressFill = document.getElementById("progressFill");
const wordCount = document.getElementById("wordCount");
const currentPosition = document.getElementById("currentPosition");
const remainingWords = document.getElementById("remainingWords");

let words = [];
let currentWordIndex = 0;
let isPlaying = false;
let readingTimeout = null;
let currentUtterance = null;

// --- Functions ---

function populatePassageSelector() {
    const passages = passageData.reading_passages;
    passages.forEach(item => {
        const option = document.createElement('option');
        option.value = item.passage;
        const preview = item.passage.split(' ').slice(0, 5).join(' ');
        option.textContent = `Passage ${item.id}: ${preview}...`;
        passageSelector.appendChild(option);
    });
}

function handlePassageSelection(event) {
    const selectedPassage = event.target.value;
    textInput.value = selectedPassage;
}

function updateSpeedDisplay() {
  const speed = parseFloat(speedControl.value);
  speedDisplay.textContent = speed + "x";
  
  if (speed <= 0.75) {
    speedDisplay.textContent = "🐢 " + speed + "x";
  } else if (speed >= 2) {
    speedDisplay.textContent = "🐰 " + speed + "x";
  } else {
    speedDisplay.textContent = "🚶 " + speed + "x";
  }
}

function updatePauseDisplay() {
  const pause = pauseControl.value;
  pauseDisplay.textContent = pause + "ms";
}

function loadText() {
  const text = textInput.value.trim();
  if (!text) {
    alert("🤔 Oops! Please type some text or select a passage first!");
    textInput.focus();
    return;
  }

  words = text.replace(/[^\w\s\-'.!?,]/g, ' ')
             .split(/\s+/)
             .filter(word => word.length > 0);
  
  if (words.length === 0) {
    alert("😅 I couldn't find any words to read. Try a different story!");
    return;
  }

  renderWords();
  showAllControls();
  resetReading();
  updateStats();
  
  alert(`🎉 Awesome! I found ${words.length} words to read with you!`);
}

function renderWords() {
  textCanvas.innerHTML = "";
  
  words.forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    span.className = "word";
    span.dataset.index = i;
    span.onclick = () => speakSingleWord(i);
    span.title = `Click to hear: "${word}"`;
    textCanvas.appendChild(span);
  });
}

function showAllControls() {
  controlsStep.classList.remove("hidden");
  speedStep.classList.remove("hidden");
  progressSection.classList.remove("hidden");
}

function togglePlay() {
  if (words.length === 0) return;
  
  if (isPlaying) {
    pauseReading();
  } else {
    startReading();
  }
}

function startReading() {
  isPlaying = true;
  playBtn.textContent = "⏸️ Pause";
  playBtn.classList.add("pause");
  stopBtn.disabled = false;
  resetBtn.disabled = false;
  
  readNextWord();
}

function pauseReading() {
  isPlaying = false;
  playBtn.textContent = "▶️ Continue";
  playBtn.classList.remove("pause");
  
  if (currentUtterance) synth.cancel();
  if (readingTimeout) clearTimeout(readingTimeout);
}

function stopReading() {
  isPlaying = false;
  playBtn.textContent = "▶️ Start Reading";
  playBtn.classList.remove("pause");
  stopBtn.disabled = true;
  
  if (currentUtterance) synth.cancel();
  if (readingTimeout) clearTimeout(readingTimeout);
  
  clearHighlight();
}

function resetReading() {
  stopReading();
  currentWordIndex = 0;
  updateProgress();
  updateStats();
  resetBtn.disabled = true;
}

function readNextWord() {
  if (!isPlaying || currentWordIndex >= words.length) {
    if (currentWordIndex >= words.length) {
      stopReading();
      currentWordIndex = 0;
      updateProgress();
      updateStats();
      setTimeout(() => {
        alert("🎉🌟 Amazing job! You finished reading the whole text! 🌟🎉");
      }, 500);
    }
    return;
  }

  const word = words[currentWordIndex];
  highlightWord(currentWordIndex);
  updateProgress();
  updateStats();

  currentUtterance = new SpeechSynthesisUtterance(word);
  currentUtterance.rate = parseFloat(speedControl.value);
  currentUtterance.pitch = 1;
  currentUtterance.volume = 1;

  currentUtterance.onend = () => {
    if (!isPlaying) return;
    currentWordIndex++;
    const pauseDuration = parseInt(pauseControl.value);
    readingTimeout = setTimeout(() => {
      if (isPlaying) readNextWord();
    }, pauseDuration);
  };

  currentUtterance.onerror = () => {
    console.log("Speech error occurred");
    currentWordIndex++;
    if (isPlaying) setTimeout(() => readNextWord(), 200);
  };

  synth.speak(currentUtterance);
}

function speakSingleWord(index) {
  const wasPlaying = isPlaying;
  stopReading();
  highlightWord(index);
  
  const word = words[index];
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.rate = parseFloat(speedControl.value);
  
  utterance.onend = () => {
    if (wasPlaying) {
      currentWordIndex = index + 1;
      setTimeout(() => {
        if (currentWordIndex < words.length) startReading();
      }, 500);
    } else {
      setTimeout(() => clearHighlight(), 1000);
    }
  };
  
  synth.speak(utterance);
}

function highlightWord(index) {
  clearHighlight();
  const wordSpan = textCanvas.querySelector(`[data-index='${index}']`);
  if (wordSpan) {
    wordSpan.classList.add("highlight");
    /*wordSpan.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center',
      inline: 'center'
    });*/
  }
}

function clearHighlight() {
  const highlighted = textCanvas.querySelectorAll(".highlight");
  highlighted.forEach(span => span.classList.remove("highlight"));
}

function updateProgress() {
  if (words.length === 0) return;
  const progress = (currentWordIndex / words.length) * 100;
  progressFill.style.width = progress + "%";
}

function updateStats() {
  if (words.length === 0) return;
  wordCount.textContent = words.length;
  currentPosition.textContent = Math.min(currentWordIndex + 1, words.length);
  remainingWords.textContent = Math.max(0, words.length - currentWordIndex);
}

// --- Event Listeners ---
// This section connects the HTML buttons to the JavaScript functions.
function setupEventListeners() {
    document.querySelector('.big-button').addEventListener('click', loadText);
    playBtn.addEventListener('click', togglePlay);
    stopBtn.addEventListener('click', stopReading);
    resetBtn.addEventListener('click', resetReading);
    passageSelector.addEventListener('change', handlePassageSelection);
    speedControl.addEventListener('input', updateSpeedDisplay);
    pauseControl.addEventListener('input', updatePauseDisplay);
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space" && words.length > 0) {
        e.preventDefault();
        togglePlay();
      }
    });
}

// --- INITIALIZE THE APP ---
function init() {
    populatePassageSelector();
    updateSpeedDisplay();
    updatePauseDisplay();
    setupEventListeners(); // Set up all the button clicks
}

init(); // Run initialization functions when the script loads

