import type { Survey } from "@/types/survey";

export const surveys: Survey[] = [
  {
    id: "#0001",
    state: "active",
    type: "Beneficiado",
    schedule: {
      date: "2023-09-01",
      time: "10:00h",
    },
    data: {
      name: "Maria de Fátima",
      location:
        "Av. Atlântica, 1702 - Copacabana, Rio de Janeiro - RJ, 22021-001",
      description:
        "Oi, eu não entendo muito de obra, mas preciso arrumar o quarto aqui de casa, tem alguns buracos na parede e não sei o que é necessário para arrumar.",
      phone: "22 99999-999",
      images: [
        require("../../assets/benefited_0001/1.png"),
        require("../../assets/benefited_0001/2.png"),
        require("../../assets/benefited_0001/3.png"),
        require("../../assets/benefited_0001/5.png"),
        require("../../assets/benefited_0001/6.png"),
      ],
    },
  },
  {
    id: "#0002",
    state: "active",
    type: "Beneficiado",
    schedule: {
      date: "2023-09-01",
      time: "10:00h",
    },
    data: {
      name: "César Ribeiro",
      location:
        "Av. Atlântica, 1702 - Copacabana, Rio de Janeiro - RJ, 22021-001",
      description:
        "Oi, eu não entendo muito de obra, mas preciso arrumar o quarto aqui de casa, tem alguns buracos na parede e não sei o que é necessário para arrumar.",
      phone: "22 99999-999",
      images: [
        require("../../assets/benefited_0001/1.png"),
        require("../../assets/benefited_0001/2.png"),
        require("../../assets/benefited_0001/3.png"),
        require("../../assets/benefited_0001/4.png"),
        require("../../assets/benefited_0001/5.png"),
      ],
    },
  },
  {
    id: "#0003",
    state: "active",
    type: "Doador",
    schedule: {
      date: "2023-09-01",
      time: "10:00h",
    },
    data: {
      name: "Raquel Acioly",
      location:
        "Av. Atlântica, 1702 - Copacabana, Rio de Janeiro - RJ, 22021-001",
      description:
        "acabei de reformar minha casa e sobraram alguns mateiais: areia, cimento, brita... gostaria de fazer uma doação",
      phone: "22 99999-999",
      images: [
        require("../../assets/benefited_0001/1.png"),
        require("../../assets/benefited_0001/2.png"),
        require("../../assets/benefited_0001/3.png"),
        require("../../assets/benefited_0001/4.png"),
        require("../../assets/benefited_0001/5.png"),
        require("../../assets/benefited_0001/6.png"),
      ],
    },
  },
];
