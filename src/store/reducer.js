import produce from 'immer';

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const reducer = produce((draft, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            draft.active = action.language;
            return draft;
        default:
            throw new Error('reducer error');
    }
});