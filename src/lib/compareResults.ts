export const compareResults = (userResult: number, compResult: number, size: number): string => {
    if (userResult !== compResult) {
        userResult > compResult && (compResult += size);
        return (userResult % 2) === (compResult % 2) ? 'Вы выиграли' : 'Вы проиграли';
    } else return 'Ничья'
}