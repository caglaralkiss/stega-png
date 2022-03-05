# stega-png
> A command line utility to hide your messages inside PNG files

## Installation

```sh
$ npm i -g stega-png 
```

## Usage 

```sh
$ stega-png --help

Usage: stega-png <command> [options]

Commands:
  stega-png hide    Hide message inside a given PNG file
  stega-png reveal  Extract the hidden text from an PNG file

Options:
      --version  Show version number       [boolean]
  -h, --help     Show help                 [boolean]
```

## Examples

Program has two functions: hide and reveal.

#### hide 

To hide a message inside a text file, use following command:

```sh
$ stega-png hide -t some_text_file.txt -i selfie.png -d selfie_stego.png
```

After command is executed, stego image will be written as `selfie_stego.png`.


#### reveal 

To reveal hidden message from a stego image, use following command:

```sh
$ stega-png -i selfie_stego.png
```

After command is executed, you will see hidden message at console.

You can write extracted message as a text file by using ``-r <file_name>`` parameter

## License

[MIT](./LICENSE)

