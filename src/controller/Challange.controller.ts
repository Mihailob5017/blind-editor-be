import { IController } from '../helpers/types/Controller.types';
import { ChallengeService } from '../services/Challange.service';

export const ChallangeController: IController = async (req, res) => {
  const { code } = req.body;
  const { challangeId } = req.params;

  try {
    if (code === undefined || challangeId === undefined) {
      throw new Error('code, language or challangeId is undefined');
    }

    const result = await ChallengeService.executeCode({
      code,
      args: '1',
      output: 2,
      outputType: 'number',
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
