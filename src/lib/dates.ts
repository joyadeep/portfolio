export const dateDifference = ()=>{
    const today = new Date();
    const initialDate= new Date('2022-03-01');
    const experience = today.getFullYear() - initialDate.getFullYear();
    return experience;
}