/* import { Readable } from "stream";
import * as tf from "@tensorflow/tfjs";

const bufferToStream = (binary) => {
    const readableInstanceStream = new Readable({
        read() {
            this.push(binary);
            this.push(null);
        }
    });

    return readableInstanceStream;
};

const getTopKClasses = async (logits, classes) => {
    const values = await logits.data();
    const topK = Math.min(classes.length, values.length);

    const valuesAndIndices = [];
    for (let i = 0; i < values.length; i++) {
        valuesAndIndices.push({ value: values[i], index: i });
    }

    valuesAndIndices.sort((a, b) => {
        return b.value - a.value;
    });

    const topkValues = new Float32Array(topK);
    const topkIndices = new Int32Array(topK);
    for (let i = 0; i < topK; i++) {
        topkValues[i] = valuesAndIndices[i].value;
        topkIndices[i] = valuesAndIndices[i].index;
    }

    const topClassesAndProbs = [];
    for (let i = 0; i < topkIndices.length; i++) {
        topClassesAndProbs.push({
            class: classes[topkIndices[i]],
            score: topkValues[i]
        });
    }
    return topClassesAndProbs;
};

const predict = async (imgElement, model) => {
    const logits = tf.tidy(() => {
        // tf.browser.fromPixels() returns a Tensor from an image element.
        let img = tf.browser.fromPixels(imgElement).toFloat();
        img = tf.image.resizeNearestNeighbor(img, [
            model.inputs[0].shape[1],
            model.inputs[0].shape[2]
        ]);

        const offset = tf.scalar(127.5);
        // Normalize the image from [0, 255] to [-1, 1].
        const normalized = img.sub(offset).div(offset);

        // Reshape to a single-element batch so we can pass it to predict.
        const batched = normalized.reshape([
            1,
            model.inputs[0].shape[1],
            model.inputs[0].shape[2],
            model.inputs[0].shape[3]
        ]);

        return model.predict(batched);
    });

    const predictions = await getTopKClasses(logits, model.classes);

    return predictions;
};

const inference = async () => {};

export { bufferToStream };
 */
