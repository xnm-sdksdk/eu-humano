import { defineStore } from 'pinia'
import { INIT_RANK } from './gameState'


export const CHAPTERS = {
    ensino: { label: 'Ensino', level: 1 },
    trabalho: { label: 'Trabalho', level: 2 }
}

export const INIT_CHAPTER = 'ensino'

export const useStoryStore = defineStore('story', {
    state: () => ({
        currentChapter: INIT_CHAPTER,
        decisions: [],
        requiredClearance: INIT_RANK
    }),
    getters: {
        ownDecisionRate() { }
    },
    actions: {
        registerDecision(dilemmaId, ownDecision) { },
        advanceChapter() { },
        checkClearance(missionId) { }
    },
    persist: true
})