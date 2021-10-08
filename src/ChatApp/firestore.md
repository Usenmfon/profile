rules_version = '2';
service cloud.firestore {
    match /databases/{database}/documents {
        match /{document=***} {
            allow read, write: if false;
        }

        match /messages/{docId} {
            allow read: if request.auth.uid != null;
            allow create: if canCreateMessage();
        }

        function canCreateMessage() {
            let isSignedIn = request.auth.uid != null;
            let isOwner = request.auth.uid == request.resource.data.uid;

            let isNotBanned = exists(
                /databases/$(database)/documents/banned/$(request.auth.uid)
            ) == false;
            return isSignedIn && isOwner && isNotBanned;
        }
    }
}


====================================
const functions = require('firebase-functions');
const Filter = require('bad-words');

const admin = require('firebase-admin')
admin.initializeApp();

const db = admin.firestore()

exports.detectEvilUsers = functions.firestore
.document('messages/{msgId}')
.onCreate(async (doc, ctx) => {
    const filter = new Filter();
    const { text, uid } = doc.data();

    if (filter.isProfane(text)) {
        const cleaned = filter.clean(text);
        await doc.ref.update({text: `I got BANNED for life for saying... ${cleaned}`})

        await db.collection('banned').doc(uid).set({});
    }
});