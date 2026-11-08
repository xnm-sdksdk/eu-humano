import { defineStore } from 'pinia'

export const useMissionStore = defineStore('mission', {
    state: () => ({
        currentMission: 0,
        activeMission: null,
        userValidations: {},
        markedExpressions: {},
        consultedDocs: {},
        missionStarted: 0,
        reportArchive: [],
        quizResults: {}
    }),
    getters: {
        verificationRate() { },
        completionRate() { },
        accuracyRate() { }
    },
    actions: {
        loadMission(missionData) { },
        startMission(id) { },
        consultDoc(missionId, docId) { },
        validateClaim(claimId, isHallucination) { },
        markExpressions(missionId, expressionId) { },
        archiveReport(missionId) { },
        completeMission(id) { },
        submitQuiz(chapterId, score) { }
    },
    persist: true
})