function barIncome(customerArray) {
    const pattern = /%(?<customer>[A-Za-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*|(?<count>[0-9]+)|[^|$%.]*(?<price>[0-9|\.]+)\$/g

}
barIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);
