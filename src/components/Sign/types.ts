import rockIcon from '@/assets/images/icon-rock.svg';
import paperIcon from '@/assets/images/icon-paper.svg';
import scissorsIcon from '@/assets/images/icon-scissors.svg';
import lizardIcon from '@/assets/images/icon-lizard.svg';
import spockIcon from '@/assets/images/icon-spock.svg';
export enum Signs {
    Rock = 'Камень',
    Paper = 'Бумага',
    Scissors = 'Ножницы',
    Lizard = 'Ящерица',
    Spock = 'Спок'
}

export enum SignColors {
    RockColor = '#DC2E4E',
    PaperColor = '#EC9E0E',
    ScissorsColor = '#4865F4',
    LizardColor = 'purple',
    SpockColor = 'purple'
}

export type SignType = {
    id: number;
    label: string;
    icon: string;
    color: string;
}

export type SignsStateType = Record<string, SignType>;
export const allSignsClassic: SignsStateType = { // Вынести в отдельное хранилище
    1: {
        id: 1,
        label: Signs.Rock,
        icon: rockIcon,
        color: SignColors.RockColor
    },
    2: {
        id: 2,
        label: Signs.Paper,
        icon: paperIcon,
        color: SignColors.PaperColor
    },
    3: {
        id: 3,
        label: Signs.Scissors,
        icon: scissorsIcon,
        color: SignColors.ScissorsColor
    },
    4: {
        id: 4,
        label: Signs.Lizard,
        icon: lizardIcon,
        color: SignColors.LizardColor
    },
    5: {
        id: 5,
        label: Signs.Spock,
        icon: spockIcon,
        color: SignColors.SpockColor
    }
}