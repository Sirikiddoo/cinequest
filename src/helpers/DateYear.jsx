export const DateYear = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).getFullYear();
};
