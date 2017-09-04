/* lib/avatar.ts: Busca avatares na biblioteca do Adorable Avatars */

interface AvatarArguments {
  size: number;
  name: string;
  id: number;
}

const makeAvatarURL = ({
  size,
  name,
  id
}: AvatarArguments): string =>
  `https://api.adorable.io/avatars/${size}/${name}@${id}.png`;

export default makeAvatarURL;
