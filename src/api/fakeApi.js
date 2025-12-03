import contents from "../data/contents.json";

export function fetchContents() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(contents), 500);
  });
}

export function fetchContentById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = contents.find((c) => c.id === Number(id));
      item ? resolve(item) : reject("Conteúdo não encontrado");
    }, 500);
  });
}
