function getElementWidth(content, padding, border) {
    const parsContent = Number.parseFloat(content);
    const parsPadding = Number.parseFloat(padding);
    const parsBorder = Number.parseFloat(border);
   
    return parsContent + (parsPadding * 2) + (parsBorder * 2);
};


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
