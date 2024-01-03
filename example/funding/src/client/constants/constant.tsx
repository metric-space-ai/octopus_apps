import { IFormulationResult, IKeywordsCollection } from "../types";

export const FUNDSTEPS = { CoreIdea: 1, Application: 2, Formulation: 3 };

export const KEYWORDSCOLLECTION: IKeywordsCollection[] = [
  {
    id: "100",
    title: "Project title",
    keywords: [
      { keywordId: "100-1", value: "AI-based feeding automaton" },
      { keywordId: "100-2", value: "Recognition and feeding" },
      { keywordId: "100-3", value: "Squirrels" },
      { keywordId: "100-4", value: "Individuals" },
    ],
  },
  {
    id: "101",
    title: "Aim of the project",
    keywords: [
      { keywordId: "101-1", value: "AI-based squirrel feeding station" },
      { keywordId: "101-2", value: "Autonomous recognition of individuals" },
      { keywordId: "101-3", value: "Special food with additives (vitamins)" },
      { keywordId: "101-4", value: "Wildlife camera" },
      { keywordId: "101-5", value: "IR camera" },
      { keywordId: "101-6", value: "Motion sensors" },
      { keywordId: "101-7", value: "Deep Learning algorithms" },
      { keywordId: "101-8", value: "90% safety" },
      { keywordId: "101-9", value: "Malnutrition" },
    ],
  },
  {
    id: "102",
    title: "Description of all work",
    keywords: [
      { keywordId: "102-1", value: "Adaptation of the algorithm/station" },
      {
        keywordId: "102-2",
        value: "Test of the whole station under different conditions",
      },
      { keywordId: "102-3", value: "Algorithm test" },
      { keywordId: "102-4", value: "PyTorch" },
      {
        keywordId: "102-5",
        value: "Identification of squirrels based on head features",
      },
      { keywordId: "102-6", value: "Algorithm test" },
      {
        keywordId: "102-7",
        value: "Test of the whole station under different conditions",
      },
      { keywordId: "102-8", value: "Adaptation of the algorithm/station" },
    ],
  },
  {
    id: "103",
    title: "Novelty",
    keywords: [
      {
        keywordId: "103-1",
        value: "Identification of single squirrel individuals",
      },
      {
        keywordId: "103-2",
        value: "Development of model elements for YOLO algorithm",
      },
      { keywordId: "103-3", value: "Algorithm test" },
    ],
  },
  {
    id: "104",
    title: "Routine delineation",
    keywords: [
      {
        keywordId: "104-1",
        value: "Building competencies in AI-based object recognition",
      },
      {
        keywordId: "104-2",
        value: "Development of an AI solution for individual feeding",
      },
      { keywordId: "104-3", value: "First automated station" },
      {
        keywordId: "104-4",
        value: "Product portfolio of manually operated automatic feeders",
      },
    ],
  },
  {
    id: "105",
    title: "Scientific-technical risks",
    keywords: [
      {
        keywordId: "105-1",
        value: "Risk of insufficient identification by AI",
      },
      {
        keywordId: "105-2",
        value: "Minimal difference in external characteristics of squirrels",
      },
      { keywordId: "105-3", value: "Seasonal and age-related" },
      {
        keywordId: "105-4",
        value: "Positioning of squirrels in front of the camera",
      },
      { keywordId: "105-5", value: "Time factor and speed of the system" },
      {
        keywordId: "105-6",
        value: "Image quality and missing colour information in IR images",
      },
    ],
  },
];
export const FORMULATIONRESULT: IFormulationResult[] = [
  {
    id: "abc1000",
    title: "Project title",
    description:
      "AI-based automatic feeder for the recognition and feeding of single individuals of squirrels",
    communicates: [
      {
        id: "def10001",
        message:
          "What measures or strategies are being considered or implemented to address the challenges posed by the variability in external features, seasonal changes, and limited time availability, ensuring the AI system can accurately and swiftly identify squirrels despite these complexities?",
        response:
          "To address these challenges, ongoing efforts involve refining the AI algorithms to adapt to variable external features and seasonal changes, utilizing advanced image processing techniques, and optimizing the system's speed to operate efficiently within the brief time window of less than 5 seconds when squirrels are present",
        status: "asking",
      },
      {
        id: "def10002",
        message:
          "lorem ipsum dolor sit am equivalents of ver lorem ipsum dolor sit am equivalents of ver lorem ipsum dolor sit am equivalents of ver ",
        response: "",
        status: "answered",
      },
    ],
  },
  {
    id: "abc1001",
    title: "Project title",
    description:
      "An AI-based squirrel feeding station is to be developed which independently recognises individuals of a population and dispenses special food with additives (e.g. vitamins) to individual animals. The automatic feeder has both a normal wildlife camera (for daytime recordings) and an IR camera (for twilight recordings) with motion sensors. After a movement detection, images are taken, transmitted to a server one after the other and evaluated using Deep Learning algorithms. As soon as the individual is correctly identified with 90% certainty, the signal is given to open the container with special food. An accuracy of less than 90% would result in undesirable severe malnutrition of the animals.",
    communicates: [],
  },
  {
    id: "abc1002",
    title: "Project title",
    description: `WP1: Design and construction of an automatic feeder with cameras and motion sensors, recording of 1000 images of 50 different squirrels with an IR camera. Squirrels with an IR and normal wildlife camera.
    WP2: Development of YOLO (You Only Look Once) model elements for squirrel recognition, implementation with PyTorch and YOLO Package.
    WP3: Data preparation, training and validation of the squirrel identification model using images of a test population based on head features (ears, nose, mouth, fur colour and tactile hairs).
    WP4: Algorithm test with IR and wildlife camera data
    WP5: Test of the entire station under various conditions (weather, day/night). (weather, day/night) and adaptation of the algorithm/station.`,
    communicates: [],
  },
  {
    id: "abc1003",
    title: "Scientific and technical risks",
    description:
      "The greatest risk is that the AI will not be able to identify the squirrels with the required speed and accuracy on the basis of the few images available. The reasons for this are that the individual animals differ only minimally in their external features, decisive features (e.g. fur and ear tufts) change seasonally and in the course of life, and the squirrel is not always positioned frontally in front of the camera. Therefore, it is not foreseeable whether the image quality will be sufficient to clearly distinguish the animals from each other. Furthermore, important colour information for differentiation is missing in the IR images. In addition, the time factor is relevant, as the wild animals only stay in the same place for a very short time and therefore the system must work for less than 5 s.",
    communicates: [],
  },
];
