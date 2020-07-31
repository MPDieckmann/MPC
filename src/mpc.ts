export namespace MPC {}
export interface MPC {}
export const MPC: MPC = {
  [Symbol.toStringTag]: "MPC"
};
export default MPC;

declare global {
  const MPC: MPC;
}
