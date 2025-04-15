import { MockMethod } from "vite-plugin-mock"

const mocks: MockMethod[] =  [
  {
      url: "/api/v1/get_user_list",
      method: "get",
      timeout: 1000,
      response: () => {
        return [
          {
              "name": "Alejandra.Renner",
              "id": "3676f6d0-0f36-4c50-b3e0-691f34dfbe61",
              "user": "1"
          },
          {
              "name": "Trevor49",
              "id": "66f241e6-951a-44b7-91b6-116f01df1940",
              "user": "2"
          },
          {
              "name": "Addison.Macejkovic",
              "id": "3bca5a32-f6b9-4938-9c96-2b46bf912a84",
              "user": "3"
          },
          {
              "name": "Oren39",
              "id": "0dcf2bc9-2910-41c6-b5df-cb255d137a6b",
              "user": "4"
          },
          {
              "name": "Roxane81",
              "id": "298e91b6-3e4b-4dab-a4ee-e459fad1e16d",
              "user": "5"
          },
          {
              "name": "Chaz.Hane",
              "id": "350bbcb5-28f0-40f3-a0cd-52266bf2c7a5",
              "user": "6"
          },
          {
              "name": "Rocky_Barrows",
              "id": "d56d59ab-e622-4a8c-b40d-75db0521690f",
              "user": "7"
          },
          {
              "name": "Lorenzo33",
              "id": "05bbefb7-8abb-4e6a-be14-a8a2d840e345",
              "user": "8"
          },
          {
              "name": "Tyler_Botsford7",
              "id": "3f60a397-7cdb-490e-9b19-aadcd995ffed",
              "user": "9"
          },
          {
              "name": "Seth_Flatley",
              "id": "6e23e99d-e364-45b6-8ccd-87c5b66073bc",
              "user": "10"
          },
          {
              "name": "Elijah.Mueller",
              "id": "4dcef293-25ea-479e-9eba-89fb533242a7",
              "user": "11"
          },
          {
              "name": "Myrtis_Mueller",
              "id": "fb02df4d-c4f2-4992-ba50-ff0d1775999e",
              "user": "12"
          },
          {
              "name": "Mertie_Kiehn93",
              "id": "87c4b09a-6016-4e7f-920e-dea7273b316e",
              "user": "13"
          },
          {
              "name": "Caitlyn.Pfannerstill",
              "id": "54cd5c72-6759-4bbd-8414-3d139ea14d8b",
              "user": "14"
          },
          {
              "name": "Jermain.Wiegand",
              "id": "809160b2-142a-4586-b7d3-87c58f886c45",
              "user": "15"
          },
          {
              "name": "Mariana.Durgan15",
              "id": "641a5586-2894-41be-9065-11adb4fd497b",
              "user": "16"
          },
          {
              "name": "Deanna31",
              "id": "555415a3-2247-443a-b4cc-9ba8633bee84",
              "user": "17"
          },
          {
              "name": "Lia17",
              "id": "11245748-54d5-4b0b-a489-d7fabec958f3",
              "user": "18"
          },
          {
              "name": "Burdette_Sanford",
              "id": "d9e6b6b6-968f-4575-ac02-a5de03d4b698",
              "user": "19"
          },
          {
              "name": "Peggie45",
              "id": "332df2d2-38b6-4d89-95b8-34f7116f607f",
              "user": "20"
          },
          {
              "name": "Lew55",
              "id": "3d1beef9-4b8f-4116-9ff5-4c47f1b7062a",
              "user": "21"
          },
          {
              "name": "Vesta_Stokes91",
              "id": "bd8ab78f-93e9-4238-965c-7cc1f5121d70",
              "user": "22"
          },
          {
              "name": "Rosalind_Hilll8",
              "id": "42313b90-fbde-4d0e-9bac-106653c6c599",
              "user": "23"
          },
          {
              "name": "Savion_Stokes",
              "id": "d6ce1a59-ce8f-4a3c-af15-20f008d04927",
              "user": "24"
          },
          {
              "name": "Jesus.Bednar",
              "id": "892a6a4c-1074-4001-af9e-3e26bc224f52",
              "user": "25"
          },
          {
              "name": "Orval.Ward",
              "id": "07309f27-40ce-415f-b4c4-5a172c1ceeb9",
              "user": "26"
          },
          {
              "name": "Arnold.Hintz",
              "id": "f11f2a19-2e39-4e63-a602-9dc33a4b0ade",
              "user": "27"
          },
          {
              "name": "Alexandro_Raynor21",
              "id": "e0ff2453-eb17-4341-851a-0bcbf05225e4",
              "user": "28"
          },
          {
              "name": "Adolfo.Bayer18",
              "id": "9530bfa7-1d01-48f4-b6d1-2cb5a71854e9",
              "user": "29"
          },
          {
              "name": "Viviane.Cormier",
              "id": "7d0b8439-256c-4a03-a96e-b3e344043b4f",
              "user": "30"
          },
          {
              "name": "Hanna34",
              "id": "a8b616dc-738c-45b5-a1c9-028239054a75",
              "user": "31"
          },
          {
              "name": "Rebecca.Schimmel",
              "id": "a4cfe5e2-90e7-442b-a244-a422a608ab96",
              "user": "32"
          },
          {
              "name": "Rahul_Lang98",
              "id": "b95ded91-962b-4e83-9771-09e92429bf92",
              "user": "33"
          },
          {
              "name": "Keaton.Windler",
              "id": "2b1b04bd-776a-4008-9c04-0b6eba1bdaa4",
              "user": "34"
          },
          {
              "name": "Juana.OKon",
              "id": "6b744faa-b4e1-40a5-9599-efb404da200a",
              "user": "35"
          },
          {
              "name": "Agustin78",
              "id": "9ffc06d6-e80f-402f-825d-257f8e096a47",
              "user": "36"
          },
          {
              "name": "Ben_Tillman99",
              "id": "13c673f3-4fb9-426c-91cd-f5d29d6f6b98",
              "user": "37"
          },
          {
              "name": "Della.Gerlach",
              "id": "6b32e2fb-6534-40ed-9dc9-7d2ea10a2a71",
              "user": "38"
          },
          {
              "name": "Lula_Wiegand33",
              "id": "4788b32f-a371-419d-8c22-78166ebe90a4",
              "user": "39"
          },
          {
              "name": "Isaiah_Corkery",
              "id": "6ea67af6-4d72-4ad4-b5b6-76d451b5df50",
              "user": "40"
          },
          {
              "name": "Delfina80",
              "id": "ed6064b2-656d-48ad-b988-acd0f3f2442a",
              "user": "41"
          },
          {
              "name": "Savion56",
              "id": "4304a7ef-00a8-4d67-b040-9ded597ad696",
              "user": "42"
          },
          {
              "name": "Santino.Ward64",
              "id": "8cc5bfc9-6488-47e2-9dbe-df95eacd47b0",
              "user": "43"
          },
          {
              "name": "Alysha8",
              "id": "2f698174-7b7d-4ee4-ad99-abe189f14f1d",
              "user": "44"
          },
          {
              "name": "Kattie.Keeling6",
              "id": "14083ab2-f8f4-4a97-b654-7d684a9da24c",
              "user": "45"
          },
          {
              "name": "Felicity_Kunze90",
              "id": "237e518b-88a0-4b1f-a48a-1dad473c10bc",
              "user": "46"
          },
          {
              "name": "Immanuel.Balistreri",
              "id": "ce46ed9a-7ada-46d0-86c9-4e6e8c02f17f",
              "user": "47"
          },
          {
              "name": "Santa.Flatley",
              "id": "d4108e4c-efff-4e82-975f-fccbae14f132",
              "user": "48"
          },
          {
              "name": "Cayla.Hand83",
              "id": "8aed8d7b-7734-4f0c-8b2d-7d965f83e905",
              "user": "49"
          },
          {
              "name": "Lillian_Mosciski26",
              "id": "00a9a492-631a-447d-ad13-cc3aa2dfa780",
              "user": "50"
          }
        ]
      }
  }
]
export default mocks