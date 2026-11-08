import { defineStore } from 'pinia'


export const RANKS = {
    resistente: { label: 'Resistente', level: 1 },
    combatente: { label: 'Combatente', level: 2 },
    sabotador: { label: 'Sabotador', level: 3 },
    operador: { label: 'Operador', level: 4 },
    lider_celula: { label: 'Líder de Célula', level: 5 }
}

export const INIT_RANK = 'resistente';

export const useGameStateStore = defineStore('gameState', {
    state: () => ({
        playerScore: 0,
        userBadges: [],
        currentRank: INIT_RANK,
        unlockedSkills: [],
        hallucinationRate: 0.6
    }),
    getters: {
        rank: (state) => RANKS[state.currentRank] ?? RANKS[INIT_RANK],
        rankLabel() { return this.rank.label ?? 'Missing Label' }
    },
    actions: {
        addScore(points) {
            this.playerScore += points
        },
        addBadges() { },
        updateHallucinationRate() { },
        promoteRank() { },
        unlockAbility() { }
    },

    persist: true
})