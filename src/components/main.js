export function removeItemFromList(list, item, key) {
    const new_list = list
    if (key !== undefined) new_list.splice(key.indexOf(item), 1)
    else new_list.splice(list.indexOf(item), 1)
    return new_list
}
