export default function(role) {
    switch (role) {
        case "MANAGER":
            return "Менеджер"
        case "CLIENT":
            return "Клиент"
        case "PARTNER":
            return "Партнёр"
    }
}