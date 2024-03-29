type ResultType = {
    value: number;
    result: string
}
export const compareResults = (userResult: number, compResult: number, size: number): ResultType => {
    if (userResult !== compResult) {
        userResult > compResult && (compResult += size);
        return (userResult % 2) !== (compResult % 2) ?
            {value: 1, result: 'Вы выиграли'} :
            {value: -1, result: 'Вы проиграли'};
    } else return {value: 0, result: 'Ничья'}
}