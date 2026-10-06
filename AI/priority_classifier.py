from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

# Sample emergency data
texts = [
    "minor road blockage",
    "small traffic problem",
    "light damage to property",
    "water logging on road",

    "moderate flooding in area",
    "several vehicles damaged",
    "power outage affecting homes",
    "road partially blocked",

    "severe flood trapping people",
    "building collapsed with people inside",
    "major fire with injured people",
    "many people need immediate rescue"
]

labels = [
    "LOW", "LOW", "LOW", "LOW",
    "MEDIUM", "MEDIUM", "MEDIUM", "MEDIUM",
    "HIGH", "HIGH", "HIGH", "HIGH"
]

# Convert text into numerical features
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(texts)

# Train the classifier
model = LogisticRegression()
model.fit(X, labels)


def classify_priority(emergency):
    emergency_vector = vectorizer.transform([emergency])
    return model.predict(emergency_vector)[0]


# Example
emergency = "Severe flooding has trapped several people"
priority = classify_priority(emergency)

print("Emergency:", emergency)
print("Predicted Priority:", priority)
