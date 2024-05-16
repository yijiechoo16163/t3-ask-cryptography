function encode() {
    const input = document.getElementById('encryptInput').value;
    let encoded = encodeEmojiCipher(input);
    document.getElementById('encryptOutput').value = encoded;
}

function decode() {
    const input = document.getElementById('decryptInput').value;
    let decoded = decodeEmojiCipher(input);
    document.getElementById('decryptOutput').value = decoded;
}

// Define the mapping for the substitution cipher
const emojiCipher = {
    'a': '11', 'b': '12', 'c': '13', 'd': '14', 'e': '15',
    'f': '16', 'g': '17', 'h': '18', 'i': '19', 'j': '20',
    'k': '21', 'l': '22', 'm': '23', 'n': '24', 'o': '25',
    'p': '26', 'q': '27', 'r': '28', 's': '29', 't': '30',
    'u': '31', 'v': '32', 'w': '33', 'x': '34', 'y': '35',
    'z': '36', ' ': '37'
};

// Function to encode a string into the emoji cipher
function encodeEmojiCipher(text) {
    let encodedText = '';
    for (let char of text.toLowerCase()) {
        encodedText += emojiCipher[char] || char;
    }
    return encodedText;
}

// Function to decode a string from the emoji cipher
function decodeEmojiCipher(text) {
    let decodedText = '';
    let cipherKeys = Object.keys(emojiCipher);
    let cipherValues = Object.values(emojiCipher);

    for (let i = 0; i < text.length; i += 2) {
        let char = text.slice(i, i + 2);
        let index = cipherValues.indexOf(char);
        decodedText += index !== -1 ? cipherKeys[index] : char;
    }

    return decodedText;
}

// Test the functions
let testText = 'hello world';
let encoded = encodeEmojiCipher(testText);
let decoded = decodeEmojiCipher(encoded);
console.log(`Original: ${testText}`);
console.log(`Encoded: ${encoded}`);
console.log(`Decoded: ${decoded}`);