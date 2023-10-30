import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
class CardComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinylogo}
                    source={{
                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEWTeD3//////ev///KRdTj//+7///CRdTmsmGmmkF+PcjKNcC+NcCyLbSaOcTH//eyYfkP49vLc1MSijFuZgEjVyqvUyrjEt566qoqwnnagiFWcg07u6uLOxK/08uzp5Nq+r5Lk3dG0on/t58+5qID28t3DtJClj2Ti2r/c07bRxaWzoXfKvZvx69WvnHC+rofrcsWFAAAQQ0lEQVR4nOWda3vyKBCG0UBUQmzUaI2Htlbj+fD//92SqK1yCiSgdt/ny+61G2tugWFmgAHUnKsz6Q6m78Nk1RuN4whE8XjUWyXD9+mgO+m4/3rg8G9TtPfvVRSGJMAYwwb4VQPS/xKQMIxW3+9uQV0RTrrDVUwIhhCoBSEmJF4NuxNHb+KCcDJNIkzhCtjuOOnzUTJ1QWmbsNMdRmFgAneDGYTRsGu7x1ol/BgktC1K0V1FP58MPmy+lD3CziABpFzjMU1JQDKw15K2CD+HpGTfFEIGZPhp6c2sEHamvbBa5+SFw97USkNaIJx8AYvN9ysYgC8LxrUy4WeCbTffrzBOKnfWioSzVeii+X4Fw9XsiYSfiWO+M2O1dqxAOEmsTA4ajCSpMB5LE3aGD+I7Mw5L29WyhFOH9kUkjKcPJZyNyEP5MpHR7HGEQyfzX5FgMHwQYffBHfRXGHcfQNj5Dp/Elyn8NrY4poSz+FkNeBaOZ24Jv0ij+C2cqkG+HBJ+9B5vQnmRnlGEbELYLUwrPUYQmhgcA8L3BzoxakHy7oIweYUeehVJrBN+jJ9rQ1nhse5g1CT8jF+lh14FY82YSo/wVWzMrXTtjRbh9JlujFyhVrihQ/iigJqIGoTvr2RE76UzaxQTfr0uIEUsduEKCb9etYueFRYiFhG+cBc9q7CjFhBOXx2QIhaYGzXhy1rRWxVYVCVh9y8AUkTl1K8i/Hw9R0YsqHLgFIQfL+eLygRjhRuuIBz/FUCKOC5DmLxWuKQWlseLUsKXnwjvJZ8WZYTdvwVIEWUGVUL48YIBoVoQSqyNhLD31wApYs+E8KXjCZkkcYaQcPYXASniTJewE6tS9w1IhSHUTO9nD2d6wMBuxKJlGxHht2wmhLhNwKjV3J0Wu+YYk3bBW8M2gb3jab/fL5enZmxz15RQ+FuPUOJvwyDoLfuHer2OfN9HqF6fb484kPoFjSA4bufnpzOherpZYLeQIh9cQCh6Z9iOjv3Uy8De6me90Xf3/PkyDkT9FcJW/nz9Rgh59U2rqOErCesQDnlCSEbb1Lt725+39ur9FrfkBoPF3PeFz/vro/AnsUTIL4RzhLOA4wub67rwdc/y6/P7VbcG2c194e9xbsk1cOfyBrNCwhHbiYLRWv665/6K0PbGVAYjBd/5J1lwP6MtwVERIZuYgXBbwJcz+ukuuH5gX/wBr+9s8uDSNgxhh+k/7ebBK+TLhLw+zoZX0Dz4b8WPe/PIFSLuKAkZM9NeoOIGvMifAwiI7gfQwRUia2zuCSf3fRQ2FQaGf+l0RLZ6LZ4/7SqHQCYKwuT+S0mq3YL5S9fXBr8ISiM3swZM5ISfTBPutFvkh9FA/tyRg08+pYRMEwYbozc2lr9xM2ncN+It4YxxSMnBLWHdW7adIIYzCeGKGfph6haQivMvrAiuxISfbExB5rI21JjxtITmbtYNwk8hYcL5a30BIcojJ4Q0PJ3L8+jmH6y8vZOheDsSfwknnDsMm6wtpZHEvH86tsat42mdakD69fWyFZEQ905zsS+gzCeUFp4ICL94h5/ppsibL8c0UIew0YA4iI5rcUR1w7cdk9yZA/T55lww+Tiyp/iLJ+wInoOjmxmO8jUxvv3FYXBMPfmQRH4/at88D/GeR3xDLTeuTYcjnIp+S9hK/evrHlr88REY7qWt6Kcj9k9Sr5X/HdZOZoxgyhGKc8Aw3tQ9H/leuhSfeiULiSPjrwWudbBAXJt7TmaM3/zwlZCbKi5qBKNTf7PfRbJfOmgJEf0tFpmQgO+oft/JSPyZMK6EguzMRQ3YDlSnlu8G60/DbCU+Zyhwzp3kNH6CqAthp4ITjJuCwSWfybl4xT85sTWkc0c4qNJT2gu263lN6UvjHduIaO2kmwaDO0LOnzES2fvahKC9ZhsxdeOcJreEH9X+WKPn6RPCFuvWIsXTVfRxQzioFos2WgaEgLCN6O+d2BoyuCGs1kkNCeGC6dNo7mTSv3TTnJDNIZrKjBAE3ECMqn2/ROe8Yk5YdVuCKSHbTT03vul58wJQT/d6MiTErOl1NCOeJ/2csGonMSTk4k7kxnED0ZVwUjWVYEgIImYcorkbwnByIRQGTiYyJcRMAugNuVluy0MoUH2uMCfkErHeyEkuI58vgIVhaN6GJ9bLW7jxaqIzIZ+CMpUpIbfi42+lc34D4nY7CNpYd3vLrbKEFKjssgFzwsaYNTXi8AK2SbzaLfv9zWa7XLQi4+0qmeMGqs+G5oQAs+sFKW/OYQB223mKvCxBi3zfQ+mhv4NGkNmMCPhkvrmMCTmvps7aAhw0N3WfychmaeX10aDWVpbeB7VOXILpXuZtyHo1TACFwVKyu6WOvHSpv5cj7lDCSfVVPGNCLrzwlzcvjaGU78J4Eqa5BCITSmhhN7AxYWPEvvWN30Z2ResFyJuP9AIu6nyD2nt1f8KYEATsO/+sB0O4KVgryJ9HSy1HDL9Twu/qk605Ibdwl17+R7uZ6u0FuOxuKRD8poTVTWkJwjazcPdWP+fcg5P29hZ/rfHi1JiC6j5bGUK8ZP22XfYJwv5nNaKGBYlqoGNhFdacELKfyLNRgpy/Sp4GYtgBlYPDUoQAskEw9dsMAbVWkMMJsHF0pARhwCT30QHinfHWD3Qs+h7SBZXy+RUIOb8NxGYbjnLCtOBrQDAAUwvhdQnC9pY1NSPpzg+FCpfm8BRYmPBLjUN2NQepAOX/yx+rZ0X8DqrHTuUI2aUOGQXyPS+dp54n9uRQwU4HPASVkzTlCEGks+EK+fXNIs5ifByfhJvN35C6EWECVhZyQGUIA41h5x+WNOI9v2CD/tte4NEVjMTGCvSqA5YjZE0N34BoydS+C+KNYMZUN2IPjCrSZSpDyJkavgF7XITUCPrcpzz1ksAIjKugXb+4DGGvAHAtzMiEfcNF8jGonsMoRwig0tSgucTGQ37TqxIhBjaW7koR8l7NLWAq28rP+ewF6WQ7S5OlCLls1K38o3Sa5oLnoinxaW0IuW0nNy+tGFvwyHpDB1XwED1vHIJIQahcFGYHsKdqw/hptjTbRi4biOr1RH7lqqWYEcdPmw8lm6xz+Urbwc2kd8lWVqOn+TSqAytIvXLFbjlSrFxlPs2z/FKqSBZOFBymYZ12lTGlfumzYgvAL3ZrtUn2OTYDoshI0djiSfFhJi7Ov356p/40OyOqpgsaHz4pxs8kO/xXtC+aNaYoVRC+PytPkwuK5wuvYI5mE+ai9dWr8PRZubZcARconNukwM/iJkQFYTB4Vr40FxRnSItShFwvVYxD0n1WzvssYQSFDkULV0xUoppdwsmT1i0uEp8dk4WGV7G/i5Kw86S1p+u7jgRuTVE0xGUHUF8+f0bPWj+8KhQcUy3aFM15e4oP5OuHFtaAubhbmxAv+UYs2gLGdW1Pvj6TrwHbWMdnO5unXUmL3YiZNUnBhqqY+0nkAy1fx7cxXXAJbO24WpA2RSflOAz47IfcWOZ7MSzsp2GzSmit3S8gu+8k+/hOgchnIVWWKd9PY2FPFJtzUUew9xId+kcn6U1ZOOI8PdW4zfdE2TCm9D1vEH2Tg0zcnoX8pectEAh2k8DgyK1RvSF5E533tVnYm5i96O8hX29u8pOJV2iQl66XlLL9UzYtO3kMd4KjxKohcdmbWH1/af4C/fxAOvL9jcleV26r6e+b+yid95eL5jgCGMaj5nIj3A3mK6LJy/7S6nuEcwW97aFeP/RbRsEKVi3Q5PtKr1DIF24mQqqTb5c9wjb8tkywTbLLjc3yPrJMBifZmXFloi2ytVe/vBo9kxo/oiY8qGaWxNZ5i/IiVQvEKDy2m/MWNkLEcoJj0xo/jNQlGX7OzNgaiObiDlsaCh2Ufz6ydnatrAKTrYhCKVdwbs6uPaksMuGPuZtJscqY//3f84dVz5CWUlbNrxIfQruC3PjvGdInzBeNYKe53VkKmB7VgLfngO04bibC0UbkoehX+KPe76ig592d5a54Ht9UkJyE5ULRfKNZnAn52+JKr7fn8R/aTRtBS1RtKIuDRmFvXS+GRGg9LvRS7msqVKuLYaZgJOyg9fOqGiS95Tr1FN01283X1LhokqmLUaW2iZHacCurZ4vOx/JpHBjvNnN0V7T4p/E8f74fa51fY2qbPGjSx3Apr9frL37eAdIAv7nf3FSSPpefnvdPkSj2F30VU59GWmPIpjA+pXI/lHUxaVuSELR2i9Nyn1UEX+hUEP8VV2PI/V0BlG+uOpGWCnsRvNZ0x2bHZPk6UY5DKBodL5Un0pDlEoqCWl+iem2W1MC4168rT6TZBhTVaxPV3LOgLEU2PknKl/+OwdQyoKjmnq2E1O3XBCQYN/dzdfPlxfmA5RYU1k207dfQmWF9kBa9/NWbnzZt2wBx7UvLE0b7VPf4KVvQgGhr/55hSf1SK+n9q4q34p/lHaw3oLwGLVdHuIJEK5/CBly6KD8vrSNscyTqBEHI30jLMVaRvBY0W8+7vJR7uK98tIO6uYteUc/bWiPKayz/DsD0pKo3WUGqmuxW1oMz4aJjWz7aO7vGQ1lX31YQJdh/cMdX70M3tcpB0d0ItvKKgaoNKV9xDqK8Cu63sHR5rOI8TFYf2uFVOoV3lAjumSkj2cE05Kd70HbIp3HPjOCuoDIS7eZCfn29C5yNv7M07gqyY2wgWz85Kye97dn3QBnp3PckvrPL/KuOPymn/HKvw7YJXF+7BjTv7LJ0z3FWCfycI6vX18vIIIdUQZr3rsnvzjNSI4hP++3+tBsT+fVzdqV7d16tY+mq46yYnGGKrNr3ad9/+P+/w/IfuIf0H7hL9h+4D/j/f6fzP3Av9z9wt3qt5upuOweCYzmGgvDD0sTvXjCWWJkCwtrnnyH8VFCoCC354M4l8rc1CWvTv4AYsnkLE0JLaRun4hIzZoSvPy3KJ0JNwtrXa3fUUOxumxC+dpwhiSfMCF+5oxZ2UT3C17WoBVZUn/BVEbUA9Qhr3RcMFyFUTvSGhLXPl/NRYaxy1cwJax/j1wqm8FjhbJcipPHiK5lUIo8HyxPSWeNVeirUmSVKEL6MvdG1MeaEtY/eK/RU0tMdguaEr9BTjXpoCcLaLH6uTcXxzPCNTQlrne9nOjjht2jxxS4hNTj4Wc2IsYmJKU9Yqw0fsJrLCwb8ErYrwtps9HijSkazUu9ajpCGGw/uqhhrBRIWCWud4QMnDkiGxhamMmGtNkkexAhJMil+HQeENKZKpFVWLPKFiWac5ICQmpyVY0YYrmbVXrEiYdaODm0OxtXazwohHY9fbnY7wQB8VRh/FgmpXZ32QtsNicPetLT9vJUVQqrPofH1iwpBQoaVu+dFtghpQw4SYGX6gAQkAyvNl8seIdXHIMEG9y+KRD+fDIwi3CJZJaTqdIdRWLK/wiCMhl17rXeWbcJMk2kS0bYwwYT0+SiZWjCdnFwQZpp0h6uYUMzCS4MoHIlXw64LukyuCDN1Jt3371WUlcdiDyo3suPLAQnDaPX93p3Y7pm3ckl4EQUdTN+Hyao3GscRiOLxqLdKhu/TgVu0i/4DbxElOorPzZIAAAAASUVORK5CYII='
                    }}
                />
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://yellow.ua/media/catalog/product/cache/9/small_image/300x300/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium.jpg',
                    }} />


                <Text style={styles.title}>Apple iPhone 15 Pro Max 256GB (Natural Titanium)</Text>
                <Text style={styles.cost}>66 799 грн</Text>
                <View style={styles.rows}>
                    <TouchableOpacity style={styles.butButt} >
                        <Text>Купити</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.creditButt} >
                        <Text>В кредит</Text>
                    </TouchableOpacity>
                    {/* <Button style={styles.butButt} title='Купити' />
              <Button style={styles.creditButt} title='В кредит' /> */}
                </View>
                <View style={styles.rows}>
                    <Text style={styles.isContain}>Є в наявності</Text>
                    <Text style={styles.code}>код: 000073285</Text>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#000",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        margin:10,
        height:400,
        padding:10
    },
    rows: {

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: "row",
        width: "80%"
    },
    logo: {
        width: 166,
        height: 158,
    },
    title: {
        fontSize: 20,
        width: 300,
        textAlign: "center",
        marginTop: 10
    },
    cost: {
        textAlign: "left",
        width: "80%",
        fontSize: 25,
        fontWeight: "900",
        marginVertical: 10
    },
    butButt: {
        backgroundColor: "gold",
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginRight: 10
    },
    creditButt: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "gold",
        borderRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginLeft: 10
    },
    isContain: {
        color: "green",
        textAlign: "left",
        marginTop: 5
    },
    code: {
        marginTop: 5,
        color: "gray",
        textAlign: "left",
    },
    tinylogo: {
        width: 25,
        height: 25,
        position: "absolute",
        left: 36,
        top: 20
    }
});


export default CardComponent;